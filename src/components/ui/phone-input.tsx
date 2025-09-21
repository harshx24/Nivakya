import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const countries = [
  { code: "+1", country: "US", flag: "🇺🇸", name: "United States" },
  { code: "+1", country: "CA", flag: "🇨🇦", name: "Canada" },
  { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
  { code: "+44", country: "GB", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
  { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan" },
  { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
  { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil" },
  { code: "+52", country: "MX", flag: "🇲🇽", name: "Mexico" },
  { code: "+7", country: "RU", flag: "🇷🇺", name: "Russia" },
  { code: "+82", country: "KR", flag: "🇰🇷", name: "South Korea" },
  { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapore" },
  { code: "+971", country: "AE", flag: "🇦🇪", name: "UAE" },
];

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onCountryChange?: (countryCode: string) => void;
  placeholder?: string;
  defaultCountry?: string;
  className?: string;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value = "", onChange, onCountryChange, placeholder = "Enter phone number", defaultCountry = "+1", className, ...props }, ref) => {
    const [selectedCountry, setSelectedCountry] = React.useState(defaultCountry);
    const [phoneNumber, setPhoneNumber] = React.useState("");

    React.useEffect(() => {
      if (value) {
        // Try to extract country code from the full value
        const country = countries.find(c => value.startsWith(c.code));
        if (country) {
          setSelectedCountry(country.code);
          setPhoneNumber(value.substring(country.code.length).trim());
        } else {
          setPhoneNumber(value);
        }
      }
    }, [value]);

    const handleCountryChange = (countryCode: string) => {
      setSelectedCountry(countryCode);
      onCountryChange?.(countryCode);
      const fullNumber = phoneNumber ? `${countryCode} ${phoneNumber}` : countryCode;
      onChange?.(fullNumber);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const cleaned = e.target.value.replace(/[^\d\s\(\)\-]/g, '');
      setPhoneNumber(cleaned);
      const fullNumber = cleaned ? `${selectedCountry} ${cleaned}` : selectedCountry;
      onChange?.(fullNumber);
    };

    const selectedCountryData = countries.find(c => c.code === selectedCountry);

    return (
      <div className={cn("flex gap-2", className)}>
        <Select value={selectedCountry} onValueChange={handleCountryChange}>
          <SelectTrigger className="w-[120px]">
            <SelectValue>
              {selectedCountryData && (
                <div className="flex items-center gap-2">
                  <span>{selectedCountryData.flag}</span>
                  <span className="text-sm">{selectedCountryData.code}</span>
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {countries.map((country) => (
              <SelectItem key={`${country.code}-${country.country}`} value={country.code}>
                <div className="flex items-center gap-2">
                  <span>{country.flag}</span>
                  <span>{country.code}</span>
                  <span className="text-muted-foreground text-sm">{country.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          ref={ref}
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder={placeholder}
          className="flex-1"
          {...props}
        />
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };