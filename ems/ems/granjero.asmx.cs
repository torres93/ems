using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using System.Web;
using System.Web.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace ems
{
    /// <summary>
    /// Descripción breve de granjero
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
     [System.Web.Script.Services.ScriptService]
    public class granjero : System.Web.Services.WebService
    {
        cnx cnx;
        SqlDataReader rdr;

        [WebMethod]
        public string HelloWorld()
        {
            return "Hola a todos";
        }
    }
}
