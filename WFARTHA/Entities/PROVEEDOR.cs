//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WFARTHA.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class PROVEEDOR
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PROVEEDOR()
        {
            this.DET_PROVEEDOR = new HashSet<DET_PROVEEDOR>();
            this.RETENCION_PROV = new HashSet<RETENCION_PROV>();
        }
    
        public string LIFNR { get; set; }
        public string LAND1 { get; set; }
        public string NAME1 { get; set; }
        public string NAME2 { get; set; }
        public string NAME3 { get; set; }
        public string NAME4 { get; set; }
        public string ORT01 { get; set; }
        public string ORT02 { get; set; }
        public string PFACH { get; set; }
        public string PSTL2 { get; set; }
        public string REGIO { get; set; }
        public string STRAS { get; set; }
        public string ADRNR { get; set; }
        public string STCD1 { get; set; }
        public string STCD2 { get; set; }
        public Nullable<bool> ACTIVO { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DET_PROVEEDOR> DET_PROVEEDOR { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RETENCION_PROV> RETENCION_PROV { get; set; }
    }
}