let n = 4;

if (n>1){
    for (let i=1; i <= n; i+=1){
        let inline = "";                
            for (let j=1; j<=n-i; j+=1){
                inline += " ";
                }    
                for (let k=1; k<=i; k+=1){
                    inline += "*";
            }
                console.log(inline);                        
        }
} else console.log("Entre com um número maior que 1");
