import { getUserprofile } from "@/api/functions/profile.api"
import { useQuery } from "@tanstack/react-query"

export const useUserProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: getUserprofile

    })
}