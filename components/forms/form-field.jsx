import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const FormField = ({label, name, placeholder, id, required, onChange, error, helperText, textarea}) => {
  return (
    <div className="space-y-2 sm:space-y-3">
      <Label htmlFor={id} className="text-sm sm:text-base font-medium">{label}</Label>
      {textarea ? (
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          className="min-h-24 sm:min-h-32 text-sm sm:text-base"
        />
      ) : (
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          className="h-10 sm:h-11 text-sm sm:text-base"
        />
      )}
      {helperText && (
        <p className="text-xs sm:text-sm text-muted-foreground">{helperText}</p>
      )}
      {error && <p className="text-xs sm:text-sm text-destructive">{error}</p>}
    </div>
  );
}

export default FormField
