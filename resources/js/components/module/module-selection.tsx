import React, { useState } from "react";
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from '@/components/ui/dialog';


const MENU = [
    {
        title: "Emotional well-being",
        items: [
            "Boost your mood",
            "Stress less & relax more",
            "'Healthify' your lifestyle (food, exercise, sleep)",
        ],
    },
    {
        title: "Your studies",
        items: [
            "Study smarter not harder",
            "Beat procrastination",
            "Boost your focus & productivity",
        ],
    },
    {
        title: "Social life & relationship",
        items: [
            "Level up your social life",
            "Express yourself & say 'no'",
            "Overcome social anxiety",
        ],
    },
    {
        title: "Self esteem",
        items: [
            "Grow your confidence & self esteem",
            "Overcome perfectionism & fear of failure",
            "Impostor syndrome, begone",
        ],
    },
];

export default function ModuleSelection() {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">Add New Module</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Please choose module that you want to choose</DialogTitle>
                <DialogDescription>
                    Horray! You can now select a module to add to your dashboard. Choose from the categories below to get started.
                </DialogDescription>
            <div className="flex flex-col gap-4 mb-4">
                {MENU.map((cat, idx) => (
                    <Button
                    variant="default"
                        key={cat.title}
                        onClick={() => {
                            setSelectedCategory(idx);
                            setSelectedItem(null);
                        }}
                    >
                        {cat.title}
                    </Button>
                ))}
            </div>
            {selectedCategory !== null && (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 16,
                    marginTop: 16,
                }}>
                    {MENU[selectedCategory].items.map((item, idx) => (
                        <button
                            key={item}
                            style={{
                                background: selectedItem === idx ? "#6366f1" : "#f3f4f6",
                                color: selectedItem === idx ? "#fff" : "#111",
                                border: "none",
                                borderRadius: 8,
                                padding: "8px 14px",
                                fontWeight: 500,
                                cursor: "pointer",
                                fontSize: 15,
                                transition: "background 0.2s",
                            }}
                            onClick={() => setSelectedItem(idx)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
                <DialogFooter className="gap-2">
                    <DialogClose asChild>
                        <Button variant="secondary" onClick={() => {}}>
                            Cancel
                        </Button>
                    </DialogClose>

                    <Button variant="default" disabled={selectedItem === null} asChild>
                        <button type="submit">Select module</button>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
