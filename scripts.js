const appData = {
    data() {
        return {
            tasks: [
                {
                    text: "Learn HTML, CSS and Javascript",
                    done: false,
                },
                {
                    text: "Learn the basics of Vue JS",
                    done: false,
                },
                {
                    text: "Complete Vue JS Challenge with excellence",
                    done: false,
                }
            ],
            newTaskText: "",
        }
    },
    methods: {
        log(any) {
            console.log(any);
        },
        clearTasks() {
            this.tasks = [];
            localStorage.removeItem('tasks');
        },
        addTask() {
            if(this.newTaskText.length) {
                const newTask = { text: this.newTaskText, done: false };
                this.tasks.push(newTask);
                this.newTaskText = "";
            }
            else alert("Doing nothing is already achieved");
        },
        storeTasks() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    },
    created() {
        this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    }
}

Vue.createApp(appData).mount("#app")