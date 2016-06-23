char listenToKeypad(){
  char key = keypad.getKey();
   
  if (key != NO_KEY){
    return key;
  }
}
