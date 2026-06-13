import next from "next";

export default function lista1(){
    const numeroFinal = 10

    return (
    <div>
    {
        (()=>{ 
            const arr = [];
                for (let i = 1; i <= numeroFinal; i++) {
                    
                    if(i == numeroFinal){
                        arr.push(
                            <span>{i}.</span>
                        );
                        continue
                    }

                    if(i == numeroFinal-1){
                        arr.push(
                            <span>{i} e </span>
                        );
                        continue
                    }
                    
                    arr.push(
                            <span>{i}, </span>
                    );
                } 
                return arr;
            })()
    }
    </div>
    )

}