'use strict'
abstract class A {}

class B extends A {}

class C implements A {}

console.log(new B() instanceof A) // true
console.log(new C() instanceof A) // false


abstract class AudioEngine {
    protected static ctx: AudioContext;
    protected static setState(s: string) { };
}

class Elementary implements AudioEngine {

constructor(ctx: AudioContext) {
    this.ctx = ctx;
};

ctx: AudioContext

protected setState(newState: string) {
        this.status.set(Sound[newState])
        return this.getState()
    };