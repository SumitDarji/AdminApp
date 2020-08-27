export class ProductModel {
    public ProductId: number;
    public ProductTitle: string;
    public ImageUrl: string;
    public Description: string;
    public Price: number;
    public Rating: number;
    public AvailableLocation: string;
    public StockAvaibility: string;
    public isRemoved: boolean;
}

export class ImageSnippet {
    public src: string;
    public Image: File;
}


 