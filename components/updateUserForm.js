import { useReducer } from 'react';
import { BiBrush } from 'react-icons/bi';
import Bug from './bug';
import Success from './success';

export default function UpdateUserForm({ formId, formData, setFormData }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(formData).length == 0)
            return console.log('FormData is empty');
        console.log(formData);
    };

    // if (Object.keys(formData).length > 0) return <Bug message={'Error'}></Bug>;

    return (
        <form
            className="grid lg:grid-cols-2 w-4/6 gap-4"
            onSubmit={handleSubmit}
        >
            <div className="input-type">
                <input
                    type="text"
                    name="firstname"
                    className="border w-full px-5 py-3 focus:outline-none rounded-md"
                    placeholder="FirstName"
                    onChange={setFormData}
                />
            </div>
            <div className="input-type">
                <input
                    type="text"
                    name="lastname"
                    className="border w-full px-5 py-3 focus:outline-none rounded-md"
                    placeholder="LastName"
                    onChange={setFormData}
                />
            </div>
            <div className="input-type">
                <input
                    type="text"
                    name="email"
                    className="border w-full px-5 py-3 focus:outline-none rounded-md"
                    placeholder="Email"
                    onChange={setFormData}
                />
            </div>
            <div className="input-type">
                <input
                    type="text"
                    name="salary"
                    className="border w-full px-5 py-3 focus:outline-none rounded-md"
                    placeholder="Salary"
                    onChange={setFormData}
                />
            </div>
            <div className="input-type">
                <input
                    type="date"
                    name="date"
                    className="border px-5 py-3 focus:outline-none rounded-md"
                    placeholder="Salary"
                    onChange={setFormData}
                />
            </div>

            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input
                        type="radio"
                        value="Active"
                        id="radioDefault1"
                        name="status"
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        onChange={setFormData}
                    />
                    <label
                        htmlFor="radioDefault1"
                        className="inline-block tet-gray-800"
                    >
                        Active
                    </label>
                </div>
                <div className="form-check">
                    <input
                        type="radio"
                        value="Inactive"
                        id="radioDefault2"
                        name="status"
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        onChange={setFormData}
                    />
                    <label
                        htmlFor="radioDefault2"
                        className="inline-block tet-gray-800"
                    >
                        Inactive
                    </label>
                </div>
            </div>

            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
                Update{' '}
                <span className="px-1">
                    <BiBrush size={24}></BiBrush>
                </span>
            </button>
        </form>
    );
}
