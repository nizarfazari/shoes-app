import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Select, Progress, Avatar } from "@chakra-ui/react"
import CommentMenu from "@/components/menu/comment-menu";
import UlasanMenu from "@/components/menu/ulasan-menu";
import DescriptionMenu from "@/components/menu/description-menu";
import DetailProductMenu from "@/components/menu/detail-product-menu";
import ImageZoom from "@/components/menu/ImageZoom";

const Menu = () => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Shop</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Detail</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <ImageZoom />

            <DetailProductMenu />

            <DescriptionMenu />

            <UlasanMenu />


            <CommentMenu />



        </div >
    )
}

export default Menu
