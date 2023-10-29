function joinedLogger(level, sep) {
    // write your code here
    
    return function(...messages) {
      const msg = messages
      .filter(message=> message.level >= level)
      .map(message => message.text)
      
      const result = msg.join(sep)
      
      ws.write(result)
      
    }
    
  }