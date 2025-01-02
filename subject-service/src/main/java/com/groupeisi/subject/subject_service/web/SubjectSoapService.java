package com.groupeisi.subject.subject_service.web;

import jakarta.jws.WebMethod;
import jakarta.jws.WebParam;
import jakarta.jws.WebResult;
import jakarta.jws.WebService;
import jakarta.xml.bind.annotation.XmlSeeAlso;
import jakarta.xml.ws.RequestWrapper;
import jakarta.xml.ws.ResponseWrapper;

/**
 * This class was generated by Apache CXF 4.0.0
 * 2025-01-02T08:10:59.241Z
 * Generated source version: 4.0.0
 *
 */
@WebService(targetNamespace = "http://web.subject_service.subject.groupeisi.com/", name = "SubjectSoapService")
@XmlSeeAlso({ObjectFactory.class})
public interface SubjectSoapService {

    @WebMethod
    @RequestWrapper(localName = "getAllSubjects", targetNamespace = "http://web.subject_service.subject.groupeisi.com/", className = "com.groupeisi.subject.subject_service.web.GetAllSubjects")
    @ResponseWrapper(localName = "getAllSubjectsResponse", targetNamespace = "http://web.subject_service.subject.groupeisi.com/", className = "com.groupeisi.subject.subject_service.web.GetAllSubjectsResponse")
    @WebResult(name = "return", targetNamespace = "")
    public java.util.List<com.groupeisi.subject.subject_service.web.Subject> getAllSubjects()
;

    @WebMethod
    @RequestWrapper(localName = "getSubjectById", targetNamespace = "http://web.subject_service.subject.groupeisi.com/", className = "com.groupeisi.subject.subject_service.web.GetSubjectById")
    @ResponseWrapper(localName = "getSubjectByIdResponse", targetNamespace = "http://web.subject_service.subject.groupeisi.com/", className = "com.groupeisi.subject.subject_service.web.GetSubjectByIdResponse")
    @WebResult(name = "return", targetNamespace = "")
    public com.groupeisi.subject.subject_service.web.Subject getSubjectById(

        @WebParam(name = "id", targetNamespace = "")
        java.lang.Long id
    );

    @WebMethod
    @RequestWrapper(localName = "addSubject", targetNamespace = "http://web.subject_service.subject.groupeisi.com/", className = "com.groupeisi.subject.subject_service.web.AddSubject")
    @ResponseWrapper(localName = "addSubjectResponse", targetNamespace = "http://web.subject_service.subject.groupeisi.com/", className = "com.groupeisi.subject.subject_service.web.AddSubjectResponse")
    @WebResult(name = "return", targetNamespace = "")
    public com.groupeisi.subject.subject_service.web.Subject addSubject(

        @WebParam(name = "subject", targetNamespace = "")
        com.groupeisi.subject.subject_service.web.SubjectRequest subject
    );

    @WebMethod
    @RequestWrapper(localName = "deleteSubject", targetNamespace = "http://web.subject_service.subject.groupeisi.com/", className = "com.groupeisi.subject.subject_service.web.DeleteSubject")
    @ResponseWrapper(localName = "deleteSubjectResponse", targetNamespace = "http://web.subject_service.subject.groupeisi.com/", className = "com.groupeisi.subject.subject_service.web.DeleteSubjectResponse")
    @WebResult(name = "return", targetNamespace = "")
    public boolean deleteSubject(

        @WebParam(name = "id", targetNamespace = "")
        java.lang.Long id
    );

    @WebMethod
    @RequestWrapper(localName = "updateSubject", targetNamespace = "http://web.subject_service.subject.groupeisi.com/", className = "com.groupeisi.subject.subject_service.web.UpdateSubject")
    @ResponseWrapper(localName = "updateSubjectResponse", targetNamespace = "http://web.subject_service.subject.groupeisi.com/", className = "com.groupeisi.subject.subject_service.web.UpdateSubjectResponse")
    @WebResult(name = "return", targetNamespace = "")
    public com.groupeisi.subject.subject_service.web.Subject updateSubject(

        @WebParam(name = "id", targetNamespace = "")
        java.lang.Long id,
        @WebParam(name = "subject", targetNamespace = "")
        com.groupeisi.subject.subject_service.web.SubjectRequest subject
    );
}
