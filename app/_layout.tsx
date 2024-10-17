import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

export default function _layout() {
  const [state, setInitialState] = useState<number>(0);
  let increment = 0;

  const onIncrement = () => {
    setInitialState(state + 1);
  }
  const onDecrement = () => {
    setInitialState(state - 1);
  }
  return (
    <View style={{width: '85%', marginLeft: 'auto', marginRight: 'auto', marginTop: 100}}>
      <Text>Use State {state}</Text>
      <Button onPress={onIncrement} title='Increment' />
      <Button onPress={onDecrement} title='Decrement' />
    </View>
  )
}
