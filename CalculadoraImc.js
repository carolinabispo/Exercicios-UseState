import React, { useState } from "react";
import { MyComponent, Div, Form, H1, Input,DivForm,DivH1,Button,P,Result} from "./style";

const CalculadoraImc = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcImc = (e) => {
    e.preventDefault();
    const result = Number(peso) / Number(altura ** 2);
    setResultado(result);
  };

  // console.log(resultado );

  const cleanInputs = () => {
    return [setAltura(""), setPeso(""), setResultado("")];
  };

  return (
    <MyComponent>
      <Div>
        <DivH1>
          <H1>Calculadora de Imc</H1>
        </DivH1>

        <DivForm>
          <Form action="">
              <P>Peso</P>
            <Input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
            <P>Altura</P>
            <Input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
            <Button onClick={calcImc}>Calular</Button>
            <P>O resultado é: <br /> </P>
            <Result>{resultado}</Result>
          
          </Form>
        </DivForm>
        <Button onClick={cleanInputs}>Novo calculo</Button>
      </Div>
    </MyComponent>
  );
};

export default CalculadoraImc;
