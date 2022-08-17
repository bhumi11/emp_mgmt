
const DateFormat = {
    methods: {
        setDate(date: string) {
            const today = new Date(date);
            let dd: any = today.getDate();
            let mm: any = today.getMonth() + 1;
            const yyyy = today.getFullYear();
            if (dd < 10)
                dd = '0' + dd
            if (mm < 10)
                mm = '0' + mm
            return mm + '/' + dd + '/' + yyyy;
        },
        setTime(date: string, showAmPm = true, showSeconds = true) {
            const today = new Date(date);
            let hours = today.getHours();
            const minutes = today.getMinutes();
            const seconds = today.getSeconds();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            const strMinutes = minutes < 10 ? '0' + minutes : minutes;
            const strSeconds = seconds < 10 ? '0' + seconds : seconds;
            let strTime;
            if (showAmPm) {
                strTime = hours + ':' + strMinutes + ' ' + ampm;
            } else {
                if(showSeconds){
                    strTime = hours + ':' + strMinutes + ':' + strSeconds;
                }else{
                    strTime = hours + ':' + strMinutes;
                }
            }
 
            return strTime;
        }
    
    }
}

export default DateFormat;