function isLongPressedName(name: string, typed: string): boolean {
    return typed.includes(name)  
  };
  console.log(isLongPressedName("alex", "aaleex"));
  