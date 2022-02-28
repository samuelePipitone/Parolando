import { Subject } from 'rxjs';

const subject = new Subject();
let i = 0;

export const comunicationService = {
    sendMessage: key => {
		
		i++

		subject.next({ 
		letter: key,
		id: i,
	 	}
	 )},
    clearMessages: () => subject.next(),
    onMessage: () => subject.asObservable()
};