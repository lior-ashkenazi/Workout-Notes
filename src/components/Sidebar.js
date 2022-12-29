import SidebarButton from "./SidebarButton";

export default function Sidebar() {
    const handleNewWorkout = () => {

    }
    return (
        <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white bg-opacity-65 border-r font-roboto">
            <SidebarButton onClick={handleNewWorkout} primary>New
                Workout</SidebarButton>
            <div className="flex flex-col flex-1 mt-6">
                <SidebarButton secondary>Workout Golan</SidebarButton>
                <SidebarButton secondary>Workout Jeremy</SidebarButton>
            </div>
        </div>
    );
}
