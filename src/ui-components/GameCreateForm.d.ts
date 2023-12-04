/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GameCreateFormInputValues = {
    hostID?: string;
    opponentID?: string;
    turn?: string;
    result?: string;
    hostName?: string;
    opponentName?: string;
    hostColor?: string;
    opponentColor?: string;
    board?: string;
};
export declare type GameCreateFormValidationValues = {
    hostID?: ValidationFunction<string>;
    opponentID?: ValidationFunction<string>;
    turn?: ValidationFunction<string>;
    result?: ValidationFunction<string>;
    hostName?: ValidationFunction<string>;
    opponentName?: ValidationFunction<string>;
    hostColor?: ValidationFunction<string>;
    opponentColor?: ValidationFunction<string>;
    board?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GameCreateFormOverridesProps = {
    GameCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    hostID?: PrimitiveOverrideProps<TextFieldProps>;
    opponentID?: PrimitiveOverrideProps<TextFieldProps>;
    turn?: PrimitiveOverrideProps<TextFieldProps>;
    result?: PrimitiveOverrideProps<SelectFieldProps>;
    hostName?: PrimitiveOverrideProps<TextFieldProps>;
    opponentName?: PrimitiveOverrideProps<TextFieldProps>;
    hostColor?: PrimitiveOverrideProps<TextFieldProps>;
    opponentColor?: PrimitiveOverrideProps<TextFieldProps>;
    board?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GameCreateFormProps = React.PropsWithChildren<{
    overrides?: GameCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GameCreateFormInputValues) => GameCreateFormInputValues;
    onSuccess?: (fields: GameCreateFormInputValues) => void;
    onError?: (fields: GameCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GameCreateFormInputValues) => GameCreateFormInputValues;
    onValidate?: GameCreateFormValidationValues;
} & React.CSSProperties>;
export default function GameCreateForm(props: GameCreateFormProps): React.ReactElement;
