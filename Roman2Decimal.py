def romanToInt(s):
  
  
        
   """
   :type s: str
   :rtype: int
   """
   res=0
   sym_val={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
   i=0
   while i <=len(s)-1:
    
    if i==len(s)-1:
      
      res+=sym_val[s[i]]
      return res
    elif sym_val[s[i]]>=sym_val[s[i+1]]:
      res+=sym_val[s[i]]
            
    elif sym_val[s[i]]<sym_val[s[i+1]]:
      v=sym_val[s[i+1]]-sym_val[s[i]]
      res+=v
                   
      if i+2 < len(s) - 1:
        
        i+=2
        continue
      elif i+2>len(s)-1:
        return res
      elif i+2==len(s)-1:
        res+=sym_val[s[i+2]]
        return  res
     i+=1
   return res
