using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using System.Web;
using System.Web.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Data.OleDb;

namespace ems
{
    /// <summary>
    /// Descripción breve de turista
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
     [System.Web.Script.Services.ScriptService]
    public class turista : System.Web.Services.WebService
    {
        cnx cnx;
        SqlDataReader rdr;
        [WebMethod]
        public string MostrarDatos(string tipo_dato)
        {
         try
            {

                cnx = new cnx();
                SqlParameter[] parameters = new SqlParameter[1];
                parameters[0] = new SqlParameter() { ParameterName = "@TIPO_DATO", Value = tipo_dato };
                rdr = cnx.ExecuteCommand("PR_CONSULTA_I_V_TURISTA", CommandType.StoredProcedure, parameters);
                List<datos> list = new List<datos>();
                if (rdr.HasRows)
                {
                    while (rdr.Read())
                    {
                        datos f = new datos()
                        {
                            descripcion = rdr["descripcion"].ToString(),
                            anio = rdr["anio"].ToString(),
                             Ene = rdr["Ene"].ToString(),
                             Feb = rdr["Feb"].ToString(),
                             Mar = rdr["Mar"].ToString(),
                             Abr = rdr["Abr"].ToString(),
                             May = rdr["May"].ToString(),
                             Jun = rdr["Jun"].ToString(),
                             Jul = rdr["Jul"].ToString(),
                             Ago = rdr["Ago"].ToString(),
                             Sep = rdr["Sep"].ToString(),
                             Oct = rdr["Oct"].ToString(),
                             Nov = rdr["Nov"].ToString(),
                             Dic = rdr["Dic"].ToString(),
                            anioAct = rdr["anioAct"].ToString(),
                            EneAct = rdr["EneAct"].ToString(),
                            FebAct = rdr["FebAct"].ToString(),
                            MarAct = rdr["MarAct"].ToString(),
                            AbrAct = rdr["AbrAct"].ToString(),
                            MayAct = rdr["MayAct"].ToString(),
                            JunAct = rdr["JunAct"].ToString(),
                            JulAct = rdr["JulAct"].ToString(),
                            AgoAct = rdr["AgoAct"].ToString(),
                            SepAct = rdr["SepAct"].ToString(),
                            OctAct = rdr["OctAct"].ToString(),
                            NovAct = rdr["NovAct"].ToString(),
                            DicAct = rdr["DicAct"].ToString(),

                        };
                        list.Add(f);
                    }
                    rdr.Close();
                    rdr = null;
                    string data = JsonConvert.SerializeObject(list);
                    //Context.Response.Write(data);
                    return data;
                }

            }
            catch (Exception ex)
            {
                return "exception";
                //throw ex;
            }
            return "";
        }
    }
}
public class datos
{
    public string descripcion { set; get; }
    public string anio { set; get; }
    public string Ene { set; get; }
    public string Feb { set; get; }
    public string Mar { set; get; }
    public string Abr { set; get; }
    public string May { set; get; }
    public string Jun { set; get; }
    public string Jul { set; get; }
    public string Ago { set; get; }
    public string Sep { set; get; }
    public string Oct { set; get; }
    public string Nov { set; get; }
    public string Dic { set; get; }
    public string anioAct { set; get; }
    public string EneAct { set; get; }
    public string FebAct { set; get; }
    public string MarAct { set; get; }
    public string AbrAct { set; get; }
    public string MayAct { set; get; }
    public string JunAct { set; get; }
    public string JulAct { set; get; }
    public string AgoAct { set; get; }
    public string SepAct { set; get; }
    public string OctAct { set; get; }
    public string NovAct { set; get; }
    public string DicAct { set; get; }
}