/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Game } from "../models";
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
export declare type GameUpdateFormInputValues = {
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
export declare type GameUpdateFormValidationValues = {
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
export declare type GameUpdateFormOverridesProps = {
    GameUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type GameUpdateFormProps = React.PropsWithChildren<{
    overrides?: GameUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    game?: Game;
    onSubmit?: (fields: GameUpdateFormInputValues) => GameUpdateFormInputValues;
    onSuccess?: (fields: GameUpdateFormInputValues) => void;
    onError?: (fields: GameUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GameUpdateFormInputValues) => GameUpdateFormInputValues;
    onValidate?: GameUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GameUpdateForm(props: GameUpdateFormProps): React.ReactElement;
