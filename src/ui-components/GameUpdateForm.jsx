/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { Game } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function GameUpdateForm(props) {
  const {
    id: idProp,
    game: gameModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    hostID: "",
    opponentID: "",
    turn: "",
    result: "",
    hostName: "",
    opponentName: "",
    hostColor: "",
    opponentColor: "",
    board: "",
  };
  const [hostID, setHostID] = React.useState(initialValues.hostID);
  const [opponentID, setOpponentID] = React.useState(initialValues.opponentID);
  const [turn, setTurn] = React.useState(initialValues.turn);
  const [result, setResult] = React.useState(initialValues.result);
  const [hostName, setHostName] = React.useState(initialValues.hostName);
  const [opponentName, setOpponentName] = React.useState(
    initialValues.opponentName
  );
  const [hostColor, setHostColor] = React.useState(initialValues.hostColor);
  const [opponentColor, setOpponentColor] = React.useState(
    initialValues.opponentColor
  );
  const [board, setBoard] = React.useState(initialValues.board);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = gameRecord
      ? { ...initialValues, ...gameRecord }
      : initialValues;
    setHostID(cleanValues.hostID);
    setOpponentID(cleanValues.opponentID);
    setTurn(cleanValues.turn);
    setResult(cleanValues.result);
    setHostName(cleanValues.hostName);
    setOpponentName(cleanValues.opponentName);
    setHostColor(cleanValues.hostColor);
    setOpponentColor(cleanValues.opponentColor);
    setBoard(cleanValues.board);
    setErrors({});
  };
  const [gameRecord, setGameRecord] = React.useState(gameModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Game, idProp)
        : gameModelProp;
      setGameRecord(record);
    };
    queryData();
  }, [idProp, gameModelProp]);
  React.useEffect(resetStateValues, [gameRecord]);
  const validations = {
    hostID: [{ type: "Required" }],
    opponentID: [],
    turn: [],
    result: [],
    hostName: [],
    opponentName: [],
    hostColor: [],
    opponentColor: [],
    board: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          hostID,
          opponentID,
          turn,
          result,
          hostName,
          opponentName,
          hostColor,
          opponentColor,
          board,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Game.copyOf(gameRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "GameUpdateForm")}
      {...rest}
    >
      <TextField
        label="Host id"
        isRequired={true}
        isReadOnly={false}
        value={hostID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hostID: value,
              opponentID,
              turn,
              result,
              hostName,
              opponentName,
              hostColor,
              opponentColor,
              board,
            };
            const result = onChange(modelFields);
            value = result?.hostID ?? value;
          }
          if (errors.hostID?.hasError) {
            runValidationTasks("hostID", value);
          }
          setHostID(value);
        }}
        onBlur={() => runValidationTasks("hostID", hostID)}
        errorMessage={errors.hostID?.errorMessage}
        hasError={errors.hostID?.hasError}
        {...getOverrideProps(overrides, "hostID")}
      ></TextField>
      <TextField
        label="Opponent id"
        isRequired={false}
        isReadOnly={false}
        value={opponentID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hostID,
              opponentID: value,
              turn,
              result,
              hostName,
              opponentName,
              hostColor,
              opponentColor,
              board,
            };
            const result = onChange(modelFields);
            value = result?.opponentID ?? value;
          }
          if (errors.opponentID?.hasError) {
            runValidationTasks("opponentID", value);
          }
          setOpponentID(value);
        }}
        onBlur={() => runValidationTasks("opponentID", opponentID)}
        errorMessage={errors.opponentID?.errorMessage}
        hasError={errors.opponentID?.hasError}
        {...getOverrideProps(overrides, "opponentID")}
      ></TextField>
      <TextField
        label="Turn"
        isRequired={false}
        isReadOnly={false}
        value={turn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hostID,
              opponentID,
              turn: value,
              result,
              hostName,
              opponentName,
              hostColor,
              opponentColor,
              board,
            };
            const result = onChange(modelFields);
            value = result?.turn ?? value;
          }
          if (errors.turn?.hasError) {
            runValidationTasks("turn", value);
          }
          setTurn(value);
        }}
        onBlur={() => runValidationTasks("turn", turn)}
        errorMessage={errors.turn?.errorMessage}
        hasError={errors.turn?.hasError}
        {...getOverrideProps(overrides, "turn")}
      ></TextField>
      <SelectField
        label="Result"
        placeholder="Please select an option"
        isDisabled={false}
        value={result}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hostID,
              opponentID,
              turn,
              result: value,
              hostName,
              opponentName,
              hostColor,
              opponentColor,
              board,
            };
            const result = onChange(modelFields);
            value = result?.result ?? value;
          }
          if (errors.result?.hasError) {
            runValidationTasks("result", value);
          }
          setResult(value);
        }}
        onBlur={() => runValidationTasks("result", result)}
        errorMessage={errors.result?.errorMessage}
        hasError={errors.result?.hasError}
        {...getOverrideProps(overrides, "result")}
      >
        <option
          children="Draw"
          value="DRAW"
          {...getOverrideProps(overrides, "resultoption0")}
        ></option>
        <option
          children="Won white"
          value="WON_WHITE"
          {...getOverrideProps(overrides, "resultoption1")}
        ></option>
        <option
          children="Won black"
          value="WON_BLACK"
          {...getOverrideProps(overrides, "resultoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Host name"
        isRequired={false}
        isReadOnly={false}
        value={hostName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hostID,
              opponentID,
              turn,
              result,
              hostName: value,
              opponentName,
              hostColor,
              opponentColor,
              board,
            };
            const result = onChange(modelFields);
            value = result?.hostName ?? value;
          }
          if (errors.hostName?.hasError) {
            runValidationTasks("hostName", value);
          }
          setHostName(value);
        }}
        onBlur={() => runValidationTasks("hostName", hostName)}
        errorMessage={errors.hostName?.errorMessage}
        hasError={errors.hostName?.hasError}
        {...getOverrideProps(overrides, "hostName")}
      ></TextField>
      <TextField
        label="Opponent name"
        isRequired={false}
        isReadOnly={false}
        value={opponentName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hostID,
              opponentID,
              turn,
              result,
              hostName,
              opponentName: value,
              hostColor,
              opponentColor,
              board,
            };
            const result = onChange(modelFields);
            value = result?.opponentName ?? value;
          }
          if (errors.opponentName?.hasError) {
            runValidationTasks("opponentName", value);
          }
          setOpponentName(value);
        }}
        onBlur={() => runValidationTasks("opponentName", opponentName)}
        errorMessage={errors.opponentName?.errorMessage}
        hasError={errors.opponentName?.hasError}
        {...getOverrideProps(overrides, "opponentName")}
      ></TextField>
      <TextField
        label="Host color"
        isRequired={false}
        isReadOnly={false}
        value={hostColor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hostID,
              opponentID,
              turn,
              result,
              hostName,
              opponentName,
              hostColor: value,
              opponentColor,
              board,
            };
            const result = onChange(modelFields);
            value = result?.hostColor ?? value;
          }
          if (errors.hostColor?.hasError) {
            runValidationTasks("hostColor", value);
          }
          setHostColor(value);
        }}
        onBlur={() => runValidationTasks("hostColor", hostColor)}
        errorMessage={errors.hostColor?.errorMessage}
        hasError={errors.hostColor?.hasError}
        {...getOverrideProps(overrides, "hostColor")}
      ></TextField>
      <TextField
        label="Opponent color"
        isRequired={false}
        isReadOnly={false}
        value={opponentColor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hostID,
              opponentID,
              turn,
              result,
              hostName,
              opponentName,
              hostColor,
              opponentColor: value,
              board,
            };
            const result = onChange(modelFields);
            value = result?.opponentColor ?? value;
          }
          if (errors.opponentColor?.hasError) {
            runValidationTasks("opponentColor", value);
          }
          setOpponentColor(value);
        }}
        onBlur={() => runValidationTasks("opponentColor", opponentColor)}
        errorMessage={errors.opponentColor?.errorMessage}
        hasError={errors.opponentColor?.hasError}
        {...getOverrideProps(overrides, "opponentColor")}
      ></TextField>
      <TextField
        label="Board"
        isRequired={false}
        isReadOnly={false}
        value={board}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hostID,
              opponentID,
              turn,
              result,
              hostName,
              opponentName,
              hostColor,
              opponentColor,
              board: value,
            };
            const result = onChange(modelFields);
            value = result?.board ?? value;
          }
          if (errors.board?.hasError) {
            runValidationTasks("board", value);
          }
          setBoard(value);
        }}
        onBlur={() => runValidationTasks("board", board)}
        errorMessage={errors.board?.errorMessage}
        hasError={errors.board?.hasError}
        {...getOverrideProps(overrides, "board")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || gameModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || gameModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
