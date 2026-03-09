'use client'

import React, { createContext, useContext, useState } from "react";

type SidebarContextType = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

export const SidebarProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <SidebarContext.Provider
            value={{
                isOpen,
                setIsOpen,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error("useSidebar must be used inside SidebarProvider");
    }

    return context;
};