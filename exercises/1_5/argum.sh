

#read -p "Digite o caminho de um arquivo ou diretório: " FILE
 
if [ -f "$@" ] 
    then
        echo "$@ é um arquivo comum"

elif [ -d "$@" ]
    then    
        echo "$@ é um diretório"

else
    echo "$@ é alguma outra coisa"

fi