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
        },
        addTask() {
            if(this.newTaskText.length) {
                this.tasks.push({ text: this.newTaskText, done: false });
                this.newTaskText = "";
            }
            else alert("Doing nothing is already achieved");
        }
    }
}

Vue.createApp(appData).mount("#app")