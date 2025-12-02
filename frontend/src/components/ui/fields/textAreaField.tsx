import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '../../base/field'
import { Textarea } from '../../base/textarea'
import { FieldControlPropsT } from './fieldTypes'
import { ComponentProps } from 'react'



type TextAreaPropsT = Omit<ComponentProps<'textarea'>, 'autoComplete'>

export function TextAreaField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TTransformedValues = TFieldValues
  >({
  control,
  name,
  label = undefined,
  placeholder,
  autoComplete = 'one-time-code',
  ...fieldProps
}: FieldControlPropsT<TFieldValues, TName, TTransformedValues> & TextAreaPropsT) {

  const preField = 'input-field-'

  return (

    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          {label && (
            <FieldLabel htmlFor={`${preField}${field.name}`}>
              {label}
            </FieldLabel>
          )}
          <Textarea
            {...fieldProps}
            {...field}
            id={`${preField}${field.name}`}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            autoComplete={autoComplete}
          />
          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />

  )
}
