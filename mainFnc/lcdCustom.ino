void initLcd(){
  lcd.begin(16, 2);
  // Print a message to the LCD.
  lcd.print("hello, world!");
  }

  void loopLcd(char key){
    // set the cursor to column 0, line 1
  // (note: line 1 is the second row, since counting begins with 0):
  lcd.setCursor(0, 2);
  // print the number of seconds since reset:
  lcd.print(key);
  }
