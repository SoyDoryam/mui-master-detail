    import React, { createContext, useState, useContext, ReactNode } from 'react';

    interface AppContextType {
        selectedItem: number | null;
        setSelectedItem: (id: number | null) => void;
    };

    const AppContext = createContext<AppContextType | undefined>(undefined);

    export const AppProvider: React.FC<{children: ReactNode}> = ({children}) => {
        const [selectedItem, setSelectedItem] = useState<number | null>(null)

        return (
            <AppContext.Provider value={{selectedItem, setSelectedItem }}>
                {children}
            </AppContext.Provider>
        );
    }

    export const useAppContext = () => {
        const context = useContext(AppContext);
        if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
        }
        return context;
    };