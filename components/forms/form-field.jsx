import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const FormField = ({label,name,placeholder,id,required,onChange,error,helperText,textarea}) => {
  return (
    <div className="space-y-4">
      <Label htmlFor={id}>{label}</Label>
      {textarea ? (
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      ) : (
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      )}
      {helperText && (
        <p className="text-xs text-muted-foreground ">{helperText}</p>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}

export default FormField
