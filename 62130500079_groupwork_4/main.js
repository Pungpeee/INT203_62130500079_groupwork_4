const app = {
    data() {
        return {
            tasks: [{
                    id:'pic1',
                    picture: './images/pic1.jpg',
                    done: false,
                    description: '🌷MEROS Coffee & Eatery'
                },
                {
                    id:'pic2',
                    picture: './images/pic2.jpg',
                    done: false,
                    description: '🌷Koffie House'
                },
                {
                    id:'pic3',
                    picture: './images/pic3.jpg',
                    done: false,
                    description: '🌷Arrivals Cafe Gallery'
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
        countimage() {
            return this.tasks.length
        },
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