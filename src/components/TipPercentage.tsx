import { Dispatch, SetStateAction } from "react";

type PercetageProps = {
  setTip: Dispatch<SetStateAction<number>>;
};

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

const TipPercentage = ({ setTip }: PercetageProps) => {
  return (
    <div>
      <form>
        <p className="text-xl font-black">Propina:</p>
        {tipOptions.map((option) => (
          <div className="flex gap-2 " key={option.id}>
            <input
              type="radio"
              id={option.id}
              name="tip"
              value={option.value}
              onChange={(e) => setTip(+e.target.value)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipPercentage;
