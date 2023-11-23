const app = {
    data() {
        return {
            tasks: [{
                    id:'pic1',
                    picture: './images/pic1.jpg',
                    done: false,
                    description: '🌷Freshman'
                },
                {
                    id:'pic2',
                    picture: './images/pic2.jpg',
                    done: false,
                    description: '🌷Sophomore'
                },
                {
                    id:'pic3',
                    picture: './images/pic3.jpg',
                    done: false,
                    description: '🌷Junior'
                },
                {
                    id:'pic4',
                    picture: './images/pic4.jpg',
                    done: false,
                    description: '🌷Senior'
                },
                {
                    id:'pic5',
                    picture: './images/pic5.jpg',
                    done: false,
                    description: '🌷Graduate'
                },
            ],
            inputTask: '',
            searchbox: false,
            currentImage: '',
            cross:false,
            
        }

    },
    methods: {
        toggleDone(index) {
            if (this.tasks[index].done) {
                this.tasks[index].done = !this.tasks[index].done
                this.tasks[index].count -= 1
            } else {
                this.tasks[index].done = !this.tasks[index].done
                this.tasks[index].count += 1
            }
        },
        search() {
            this.searchbox = !this.searchbox;
            this.inputTask = ''
            
        },
        displayImage(src) {
           this.currentImage = src
           this.cross = !this.cross

        },
        closeImage() {
            this.cross = !this.cross;
            
        },
      
        
    },
    computed: {
        searchimage() {
            return this.tasks.filter((tasks) => {
                return tasks.description.toLowerCase().includes(this.inputTask.toLowerCase());
            });
        },
        noimage() {
            return this.tasks.filter((tasks) => {
                return tasks.description.toLowerCase().includes(this.inputTask.toLowerCase());
            }).length;
        }

    }

}
mountedApp = Vue.createApp(app).mount('#app')