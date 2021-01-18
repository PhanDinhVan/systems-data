using DAL.Bus;
using DAL.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace systems_data.Controllers
{
    public class ProjectController : Controller
    {
        // GET: Project
        public ActionResult Index()
        {
            if (Session["UserID"] != null)
            {
                var list = ProjectBus.GetProject();
                ViewBag.lstProject = list;
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Login");
            }
        }

        // GET: Project/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Project/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Project/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Project/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Project/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Project/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Project/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        public JsonResult getAllProject()
        {
            var list = ProjectBus.GetProject();
            return Json(list);
        }

        public JsonResult AddProject(Project fm)
        {
            var addP = ProjectBus.InsertProject(fm);

            return Json(addP);
        }

        public JsonResult EditProject (string id)
        {
            var obj = ProjectBus.getEditProject(id);

            return Json(obj);
        }

        public JsonResult UpdateProject(Project fm)
        {
            var obj = ProjectBus.postEditProject(fm);

            return Json(fm);
        }

        public JsonResult DeleteProject(string id)
        {
            var obj = ProjectBus.deleteProject(id);

            return Json(obj);
        }

        
    }
}
