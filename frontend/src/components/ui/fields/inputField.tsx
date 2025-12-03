import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '../../base/field'
import { Input } from '../../base/input'
import { FieldControlPropsT } from './fieldTypes'
import { ComponentProps } from 'react'



type InputPropsT = Omit<ComponentProps<'input'>, 'autoComplete'>

export function InputField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TTransformedValues = TFieldValues
  >({
  control,
  type = 'text',
  name,
  label = undefined,
  placeholder,
  autoComplete = 'one-time-code',
  maskFn,
  ...fieldProps
}: FieldControlPropsT<TFieldValues, TName, TTransformedValues> & InputPropsT) {

  const preField = 'input-field-'

  return (

    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field
          data-invalid={fieldState.invalid}
          className="gap-0.5"
        >
          {label && (
            <FieldLabel
              htmlFor={`${preField}${field.name}`}
              className="ml-1"
            >
              {label}
            </FieldLabel>
          )}
          <Input
            {...fieldProps}
            {...field}
            type={type}
            id={`${preField}${field.name}`}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            autoComplete={autoComplete}
            {...(maskFn && {
              onChange: (e) => { field.onChange(maskFn(e.target.value)) }
            })}
          />
          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />

  )
}
