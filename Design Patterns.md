
## Facade Pattern

The Facade Pattern is a structural design pattern that provides a unified interface to a set of interfaces in a subsystem. It defines a higher-level interface that makes the subsystem easier to use by hiding its complexities. 

### Intent:
To provide a simplified interface to a complex subsystem.

### When to use:
1. When you want to provide a simple interface to a complex subsystem.
2. When there are many dependencies between clients and the implementation classes of an abstraction.
3. When you want to layer your subsystems.

### Structure:
The basic components in the Facade pattern are:
1. **Facade**: This is the main class that knows which subsystem classes are responsible for a request and delegates client requests to appropriate subsystem objects.
2. **Subsystem Classes**: These classes implement subsystem functionality and handle work assigned by the Facade. They aren't aware of the facade, so there's no reference to it.

### Example:
A home theater may have multiple components like a projector, a sound system, a DVD player, etc. Turning on a movie involves multiple steps like turning on the projector, setting the sound system to the right volume, inserting a DVD, and playing it.

Instead of doing all these steps individually, we can have a facade called HomeTheaterFacade that provides a simple method, watchMovie(), to handle all these tasks.

Here's a JavaScript example for the home theater system:

```javascript
class Projector {
    turnOn() {
        console.log("Projector turned on");
    }
    turnOff() {
        console.log("Projector turned off");
    }
}

class SoundSystem {
    setVolume(level) {
        console.log(`Volume set to ${level}`);
    }
}

class DVDPlayer {
    insertDVD() {
        console.log("DVD inserted");
    }
    play() {
        console.log("Playing movie");
    }
}

class HomeTheaterFacade {
    constructor() {
        this.projector = new Projector();
        this.soundSystem = new SoundSystem();
        this.dvdPlayer = new DVDPlayer();
    }

    watchMovie() {
        this.projector.turnOn();
        this.soundSystem.setVolume(5);
        this.dvdPlayer.insertDVD();
        this.dvdPlayer.play();
    }

    endMovie() {
        this.projector.turnOff();
        this.soundSystem.setVolume(0);
        this.dvdPlayer.play();
        console.log("Ending movie");
    }
}

// Client code
const homeTheater = new HomeTheaterFacade();
homeTheater.watchMovie();
```

### Benefits:
1. **Isolation**: Facade Pattern can shield clients from subsystem components, thus reducing the dependencies of outside code on the inner workings of a subsystem.
2. **Simplicity**: The Facade Pattern simplifies the interface for clients.
3. **Flexibility**: The subsystem can evolve without affecting client code as long as the facade remains consistent.

### Drawbacks:
1. **Abstraction Overhead**: There can be a performance penalty for some scenarios where every operation is routed through the facade.
2. **Potential for Over-simplification**: It might hide necessary complexities that some advanced clients might need.

In essence, the Facade Pattern is all about abstraction and making a system easier to use by presenting a simpler, unified interface to a collection of subsystems.

## Command Pattern
The Command Pattern is a behavioral design pattern that turns a request into a stand-alone object that contains information about the request, such as the method name, the object that owns the method, and values for the method parameters. This decoupling allows the sender and receiver to be developed independently.

### Intent:
- Encapsulate a request as an object, thereby allowing for parameterization of clients with different requests, queuing of requests, and logging of the operations.
- It also provides support for undoable operations.

### Structure:
The main components of the Command Pattern are:
1. **Command**: This defines an interface for executing an operation.
2. **ConcreteCommand**: This class defines a binding between a Receiver object and an action.
3. **Invoker**: Asks the command to carry out the request.
4. **Receiver**: Knows how to perform the operations associated with carrying out a request. Any class may serve as a Receiver.

### Example:
Imagine a simple remote control with buttons to turn a light on and off. The command pattern can be used to encapsulate each action (turn on, turn off) in a command object.

Here's a JavaScript example for the remote control:

```javascript
// Receiver
class Light {
    turnOn() {
        console.log('Light is ON');
    }
    turnOff() {
        console.log('Light is OFF');
    }
}

// Command
class Command {
    execute() {}
}

// ConcreteCommand
class TurnOnLightCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }
    execute() {
        this.light.turnOn();
    }
}

class TurnOffLightCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }
    execute() {
        this.light.turnOff();
    }
}

// Invoker
class RemoteControl {
    submit(command) {
        command.execute();
    }
}

// Client code
const light = new Light();
const turnOn = new TurnOnLightCommand(light);
const turnOff = new TurnOffLightCommand(light);
const remote = new RemoteControl();

remote.submit(turnOn);  // Light is ON
remote.submit(turnOff); // Light is OFF
```

In the example above:
- The `Light` class is the Receiver that performs the real action.
- The `Command` class is the abstract command, and `TurnOnLightCommand` and `TurnOffLightCommand` are the ConcreteCommands that encapsulate actions on the receiver.
- The `RemoteControl` class is the Invoker. It's what you, as the client, interact with. You pass it a command to execute.

This way, the `RemoteControl` (Invoker) is decoupled from the `Light` (Receiver). You can easily add commands for other devices or actions without changing the existing code, following the Open/Closed Principle.


Of course! Let's take the same example of a remote control, but this time implement it in Python.

### Command Pattern with a Remote Control in Python:

```python
from abc import ABC, abstractmethod

# Receiver
class Light:
    def turn_on(self):
        print('Light is ON')
    
    def turn_off(self):
        print('Light is OFF')

# Command (Abstract base class)
class Command(ABC):
    @abstractmethod
    def execute(self):
        pass

# ConcreteCommand
class TurnOnLightCommand(Command):
    def __init__(self, light):
        self._light = light
    
    def execute(self):
        self._light.turn_on()

class TurnOffLightCommand(Command):
    def __init__(self, light):
        self._light = light
    
    def execute(self):
        self._light.turn_off()

# Invoker
class RemoteControl:
    def submit(self, command):
        command.execute()

# Client code
light = Light()
turn_on = TurnOnLightCommand(light)
turn_off = TurnOffLightCommand(light)
remote = RemoteControl()

remote.submit(turn_on)  # Output: Light is ON
remote.submit(turn_off) # Output: Light is OFF
```

This Python example mirrors the structure and intent of the JavaScript example. The Command Pattern's primary advantage is that it decouples the invoker from the receiver, allowing for flexibility in terms of adding new commands or changing existing behavior without modifying the invoker.