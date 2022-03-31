console.log ('JS OK');

const contacts = [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: '_8',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }

        ],
    }
]


const app = new Vue (
    {
        el: '#root',
        data: { 
            contacts,
            activeContact: null,
            newMessage: '',
            show: false,
            search: '',
            info: false,
            delete: '',
            
        },
        methods: {

            // indici del contact selezionato
            setActive: function(i){
                this.activeContact = i;
                //return 'bg-lightgrey';
            },
            colorMessage: function(i){
                if(this.contacts[this.activeContact].messages[i].status === 'sent') {
                    return 'sent';
                } else {
                    return 'received';
                }
            },


/*
            bgGrey: function(i){
                if(colorMessage){
                    return 'bg-lightgrey';
                }
                   

            },
*/

            hour(i) {
                const dataMessage = this.contacts[i].messages[i].date;
                const fullHour = dataMessage.split(' ')[1];
                const temporary = fullHour.split(':');
                console.log(temporary)
                return temporary[0]+':'+temporary[1];
            },  
            
           
            // funzione per aggiungere nuovo messaggio
            pushNewMessage(i){
                const newText = this.newMessage.trim();
             
               
                if(newText.length > 0) {
                    this.contacts[i].messages.push(
                            {
                                date: new Date(),
                                message: newText,
                                status: 'sent'
                            }
                            
                        );
                        this.newMessage = '';        
                }
               // setTimeout
                setTimeout(() => {
                    this.contacts[i].messages.push(
                        {
                            date: '15/01/2022 15:51:02',
                            message: 'Ok!',
                            status: 'received'
                        }
                    );
                    
                }, 1000);
            },


            // funzione per aprire tendina messaggi
            infoMessage(i){
               
                this.info = !this.info;  
                this.delete = this.contacts[this.activeContact].messages[i].message;
                console.log('info', this.delete);

            },

            // funzione per eliminare il messaggio
            deleteMessage(){
                console.log('delete', this.delete);
                //const deleteMessage = this.contacts[this.activeContact].messages[i].message;
                //console.log('deleteMessage', deleteMessage);
               // deleteMessage.remove(this.message);
              // const removed = this.contacts.splice(this.delete); elimina intero array
            
            //contacts.slice([contacts], [this.delete], 1)
            //contacts.slice([this.delete], 1) 
            
          
            contacts.splice([this.delete], 1) 
            console.log('delete',  this.delete);
            console.log('array', contacts);
           
            }
            },
             // ricerca searchbar 
            computed: {
                filteredList() {
                    this.activeContact = null;
                    return this.contacts.filter(contact => {
                    return contact.name.toLowerCase().includes(this.search.toLowerCase())
                    })
                }     
            }            
    }   
);


