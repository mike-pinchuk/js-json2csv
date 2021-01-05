class Controller {
    private static instance: Controller;

    private constructor() { }

    public static getInstance(): Controller {
        if (!Controller.instance) {
            Controller.instance = new Controller();
        }

        return Controller.instance
    }

}