import { Button } from "../ui/button";
import type { CreatePollOption } from "./types";

export function PollOptionInputs({
	options,
	setOptions,
}: {
	options: CreatePollOption[];
	setOptions: (options: CreatePollOption[]) => void;
}) {
	const addOption = () => {
		setOptions([...options, { text: "" }]);
	};

	const updateOption = (index: number, text: string) => {
		setOptions(options.map((opt, i) => (i === index ? { ...opt, text } : opt)));
	};

	return (
		<div className="mb-4">
			<label htmlFor="options" className="block mb-2">
				Options
			</label>
			{options.map((option, index) => (
				<input
					key={option.text}
					id={`option-${index}`}
					type="text"
					value={option.text}
					onChange={(e) => updateOption(index, e.target.value)}
					className="w-full p-2 border rounded mb-2"
					placeholder={`Option ${index + 1}`}
					required
				/>
			))}

			<Button type="button" onClick={addOption} variant="outline">
				Add Option
			</Button>
		</div>
	);
}
