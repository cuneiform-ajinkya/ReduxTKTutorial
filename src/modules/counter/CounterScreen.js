import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const CounterScreen = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  const handleTextChange = (text) => {
    setIncrementAmount(text);
  };
  return (
    <View>
      <View>
        <Text
          style={{
            marginBottom: "10%",
            marginLeft: "5%",
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            paddingHorizontal: 32,
            borderRadius: 7,
            backgroundColor: "brown",
            width: 90,
            color: "white",
          }}
        >
          {count}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => dispatch(increment())}
          style={{
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            backgroundColor: "wheat",
            borderRadius: 7,
            marginBottom: "10%",
          }}
        >
          <Text style={{ color: "purple" }}>Increament</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(decrement())}
          style={{
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            backgroundColor: "wheat",
            borderRadius: 7,
            marginBottom: "10%",
          }}
        >
          <Text style={{ color: "purple" }}>Decrement</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput>
          <Text></Text>
        </TextInput>
      </View>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
