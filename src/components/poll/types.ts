export interface Voter {
	voterName: string;
	timestamp: string;
	id: string;
}

export interface CreatePollOption {
	text: string;
}

export interface PollOption extends CreatePollOption {
	id: string;
	votes: number;
	voters: Voter[];
}

export interface Poll {
	id: string;
	question: string;
	options: PollOption[];
	endDate: string;
	requireVoterName: boolean;
}
