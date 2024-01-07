

function calculararea(): number {
  const obj = { width: 10, height: 15 };

  const area = obj.width * obj.height;

  return area;
}

function hello() {

  let message: string = "Hello World!";

  let message2 = "Hello World 2";

  let n1 = 15.5;

  let n2: number = 15.6;

  message = message.toLocaleLowerCase();
}

let obj: any = { x: 0 };

obj.foo();
obj();
obj.bar = 100;
obj = "hello";


function usuario() {
  const usuario = {
    nome: "Daniel",
    idade: 26,
  };
}

function calculo() {
  return Math.random() < 5;
}

function validacao() {
  const value = Math.random() < 5 ? "a" : "b";
  if (value !== "a") {
    // ...
  } else {
    // nunca vai cair aqui
  }
}

function exibirMensagem(pessoa: string, data: Date): void {
  console.log(`Olá ${pessoa}, hoje é ${data}!`);
}

exibirMensagem("João", new Date());

function exibirCoordenadas(pt: { x: number; y: number }) {
  console.log("A coordenada x é " + pt.x);
  console.log("A coordenada y é " + pt.y);
}
exibirCoordenadas({ x: 3, y: 7 });

function exibirNome(obj: { nome: string; sobrenome?: string }) {

  console.log("Nome é " + obj.nome + (obj.sobrenome !== undefined ? " " + obj.sobrenome : ""));
}

exibirNome({ nome: "Renato" });
exibirNome({ nome: "renato", sobrenome: "Gava" });

function exibirId(id: number | string) {

  if (typeof id === "string") {
    console.log("Seu ID é: " + id.toUpperCase());
  } else {
    console.log("Seu ID é: " + id);
  }
}
// OK
exibirId(101);
// OK
exibirId("202");

interface Ponto {
  x: number;
  y: number;
};

function imprimirPonto(pt: Ponto): void {
  console.log("A coordenada x é " + pt.x);
  console.log("A coordenada y é " + pt.y);
}

imprimirPonto({ x: 100, y: 100 });

function imprimirTexto(texto: string, alignment: "left" | "right" | "center") {
  // ...
}

imprimirTexto("meu texto", "center");

var test1 = null;
console.log(test1); //null

var test2;
console.log(test2); //undefined

function fazerAlgo(x: string) {

  if (x === null) {
    // fazer algo
  } else {
    console.log("Olá, " + x.toUpperCase());
  }
}

fazerAlgo("Renato");

function vivendoPerigosamente(x?: number | null) {

  console.log(x!.toFixed());
}

vivendoPerigosamente(3);

function doSomething(value: Array<string>) {

  console.log(value);
}

let myArray: string[] = ["hello", "world"];

doSomething(myArray);
doSomething(new Array("hello", "world"));

class Point {
  x: number = 0;
  y: number = 0;
}

const p = new Point();
p.x = 2;
p.y = 3;

console.log(`${p.x}, ${p.y}`);

class BoasVindas {
  mensagem: string;

  constructor() {
    this.mensagem = "olá";
  }
}

const b = new BoasVindas();

console.log(b.mensagem);

class Saudacoes {
  readonly mensagem: string = "olá";

  constructor(outraMensagem?: string) {
    if (outraMensagem !== undefined) {
      this.mensagem = outraMensagem;
    }
  }

  dizerOla() {
    console.log(this.mensagem);
  }
}

const s = new Saudacoes();

s.dizerOla();


class C {
  _length = 0;

  get length(): number {
    return this._length;
  }

  set length(value: number) {
    this._length = value;
  }
}

const c = new C();

c.length = 10;

console.log(c.length);

interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}

class Animal {
  andar() {
    console.log("Andando por ai!");
  }
}
 
class Cachorro extends Animal {
  latir(numeroLatidos: number) {
    for (let i = 0; i < numeroLatidos; i++) {
      console.log("au!");
    }
  }
}
 
const d = new Cachorro();

d.andar();

d.latir(3);

class Mensagem {
  public dizerOla() {
    console.log("olá!");
  }
}
const m = new Mensagem();
m.dizerOla();

class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}
 
class SpecialGreeter extends Greeter {
  public howdy() {
    // aqui conseguimos acessar normalmente o membro protected
    console.log("Howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet(); // OK
//g.getName(); //aqui não conseguimos


class Base {
  private x = 0;

  public y = this.x;
}

const base = new Base();

// Podemos acessar y
console.log(base.y);

class Derived extends Base {
  showX() {
    console.log(this.y);
  }
}

import { helloWorld } from './hello';

helloWorld();

import { pi, phi, absolute } from "./math.js";
 
console.log(pi);
const absPhi = absolute(phi);