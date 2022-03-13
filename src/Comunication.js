import { Subject } from 'rxjs';

const subject = new Subject();

export const comunicationService = {
    sendMessage: key => {
		subject.next({ 
		letter: key,
	 	}
	 )},
    clearMessages: () => subject.next(),
    onMessage: () => subject.asObservable(),
	resetI: (row) => {
		i = 0 + ((row - 1) * 5);
		console.log(i)
	}
};