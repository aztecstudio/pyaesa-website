'use client';
import { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
	const [isHidden, setIsHidden] = useState(true);

	const data = { isHidden, setIsHidden };

	return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default ContextProvider;
export { Context };
