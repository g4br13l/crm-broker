import { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'
import { InputMaskFnT } from '../../../shared/utils/inputMask'



export type FieldControlPropsT<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues
> = {
  control: ControllerProps<TFieldValues, TName, TTransformedValues>['control']
  name: TName
  label?: string
  autoComplete?: AutoFill,
  maskFn?: InputMaskFnT
}
