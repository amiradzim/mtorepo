namespace API.DTOs
{
    public class EntryDto
    {
        public int Id { get; set; }
        public string ProjName { get; set; }
        public string PlatNo { get; set; }
        public string PlatType { get; set; }
        public string PlatArea { get; set; }
        public string SubArea { get; set; }
        public string MatType { get; set; }
        public string MatVariant { get; set; }
        public string ProcMethod { get; set; }
        public string DwgNo { get; set; }
        public string DwgCode { get; set; }
        public string MatGroup { get; set; }
        public string Description { get; set; }
        public float Diameter { get; set; }
        public float Thickness { get; set; }
        public float Nal { get; set; }
        public float UnitWeight { get; set; }
        public float BaseWeight { get; set; }
        public float SurfaceArea { get; set; }
    }
}