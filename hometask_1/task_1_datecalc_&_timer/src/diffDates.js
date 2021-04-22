import { DateTime } from './luxon.js';

export function diffDates(firstDate, secondDate) {
	firstDate = DateTime.fromISO(firstDate);
	secondDate = DateTime.fromISO(secondDate);

	if(firstDate > secondDate) {
		[firstDate, secondDate] = [secondDate, firstDate]; // реструктуризация для получения полжительных значений разницы дат
	}
	return secondDate.diff(firstDate, ['year', 'months', 'days']).toObject();
}

export const diffToHTML = diff => `
	<span>
		Лет: ${diff.years},
		Месяцев: ${diff.months},
		Дней: ${diff.days},
	</span>
`