
package com.groupeisi.subject.subject_service.web;

import javax.xml.namespace.QName;
import jakarta.xml.bind.JAXBElement;
import jakarta.xml.bind.annotation.XmlElementDecl;
import jakarta.xml.bind.annotation.XmlRegistry;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.groupeisi.subject.subject_service.web package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _AddSubject_QNAME = new QName("http://web.subject_service.subject.groupeisi.com/", "addSubject");
    private final static QName _AddSubjectResponse_QNAME = new QName("http://web.subject_service.subject.groupeisi.com/", "addSubjectResponse");
    private final static QName _DeleteSubject_QNAME = new QName("http://web.subject_service.subject.groupeisi.com/", "deleteSubject");
    private final static QName _DeleteSubjectResponse_QNAME = new QName("http://web.subject_service.subject.groupeisi.com/", "deleteSubjectResponse");
    private final static QName _GetAllSubjects_QNAME = new QName("http://web.subject_service.subject.groupeisi.com/", "getAllSubjects");
    private final static QName _GetAllSubjectsResponse_QNAME = new QName("http://web.subject_service.subject.groupeisi.com/", "getAllSubjectsResponse");
    private final static QName _GetSubjectById_QNAME = new QName("http://web.subject_service.subject.groupeisi.com/", "getSubjectById");
    private final static QName _GetSubjectByIdResponse_QNAME = new QName("http://web.subject_service.subject.groupeisi.com/", "getSubjectByIdResponse");
    private final static QName _UpdateSubject_QNAME = new QName("http://web.subject_service.subject.groupeisi.com/", "updateSubject");
    private final static QName _UpdateSubjectResponse_QNAME = new QName("http://web.subject_service.subject.groupeisi.com/", "updateSubjectResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.groupeisi.subject.subject_service.web
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link AddSubject }
     * 
     */
    public AddSubject createAddSubject() {
        return new AddSubject();
    }

    /**
     * Create an instance of {@link AddSubjectResponse }
     * 
     */
    public AddSubjectResponse createAddSubjectResponse() {
        return new AddSubjectResponse();
    }

    /**
     * Create an instance of {@link DeleteSubject }
     * 
     */
    public DeleteSubject createDeleteSubject() {
        return new DeleteSubject();
    }

    /**
     * Create an instance of {@link DeleteSubjectResponse }
     * 
     */
    public DeleteSubjectResponse createDeleteSubjectResponse() {
        return new DeleteSubjectResponse();
    }

    /**
     * Create an instance of {@link GetAllSubjects }
     * 
     */
    public GetAllSubjects createGetAllSubjects() {
        return new GetAllSubjects();
    }

    /**
     * Create an instance of {@link GetAllSubjectsResponse }
     * 
     */
    public GetAllSubjectsResponse createGetAllSubjectsResponse() {
        return new GetAllSubjectsResponse();
    }

    /**
     * Create an instance of {@link GetSubjectById }
     * 
     */
    public GetSubjectById createGetSubjectById() {
        return new GetSubjectById();
    }

    /**
     * Create an instance of {@link GetSubjectByIdResponse }
     * 
     */
    public GetSubjectByIdResponse createGetSubjectByIdResponse() {
        return new GetSubjectByIdResponse();
    }

    /**
     * Create an instance of {@link UpdateSubject }
     * 
     */
    public UpdateSubject createUpdateSubject() {
        return new UpdateSubject();
    }

    /**
     * Create an instance of {@link UpdateSubjectResponse }
     * 
     */
    public UpdateSubjectResponse createUpdateSubjectResponse() {
        return new UpdateSubjectResponse();
    }

    /**
     * Create an instance of {@link Subject }
     * 
     */
    public Subject createSubject() {
        return new Subject();
    }

    /**
     * Create an instance of {@link SubjectRequest }
     * 
     */
    public SubjectRequest createSubjectRequest() {
        return new SubjectRequest();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddSubject }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link AddSubject }{@code >}
     */
    @XmlElementDecl(namespace = "http://web.subject_service.subject.groupeisi.com/", name = "addSubject")
    public JAXBElement<AddSubject> createAddSubject(AddSubject value) {
        return new JAXBElement<AddSubject>(_AddSubject_QNAME, AddSubject.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddSubjectResponse }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link AddSubjectResponse }{@code >}
     */
    @XmlElementDecl(namespace = "http://web.subject_service.subject.groupeisi.com/", name = "addSubjectResponse")
    public JAXBElement<AddSubjectResponse> createAddSubjectResponse(AddSubjectResponse value) {
        return new JAXBElement<AddSubjectResponse>(_AddSubjectResponse_QNAME, AddSubjectResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DeleteSubject }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link DeleteSubject }{@code >}
     */
    @XmlElementDecl(namespace = "http://web.subject_service.subject.groupeisi.com/", name = "deleteSubject")
    public JAXBElement<DeleteSubject> createDeleteSubject(DeleteSubject value) {
        return new JAXBElement<DeleteSubject>(_DeleteSubject_QNAME, DeleteSubject.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DeleteSubjectResponse }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link DeleteSubjectResponse }{@code >}
     */
    @XmlElementDecl(namespace = "http://web.subject_service.subject.groupeisi.com/", name = "deleteSubjectResponse")
    public JAXBElement<DeleteSubjectResponse> createDeleteSubjectResponse(DeleteSubjectResponse value) {
        return new JAXBElement<DeleteSubjectResponse>(_DeleteSubjectResponse_QNAME, DeleteSubjectResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetAllSubjects }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link GetAllSubjects }{@code >}
     */
    @XmlElementDecl(namespace = "http://web.subject_service.subject.groupeisi.com/", name = "getAllSubjects")
    public JAXBElement<GetAllSubjects> createGetAllSubjects(GetAllSubjects value) {
        return new JAXBElement<GetAllSubjects>(_GetAllSubjects_QNAME, GetAllSubjects.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetAllSubjectsResponse }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link GetAllSubjectsResponse }{@code >}
     */
    @XmlElementDecl(namespace = "http://web.subject_service.subject.groupeisi.com/", name = "getAllSubjectsResponse")
    public JAXBElement<GetAllSubjectsResponse> createGetAllSubjectsResponse(GetAllSubjectsResponse value) {
        return new JAXBElement<GetAllSubjectsResponse>(_GetAllSubjectsResponse_QNAME, GetAllSubjectsResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetSubjectById }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link GetSubjectById }{@code >}
     */
    @XmlElementDecl(namespace = "http://web.subject_service.subject.groupeisi.com/", name = "getSubjectById")
    public JAXBElement<GetSubjectById> createGetSubjectById(GetSubjectById value) {
        return new JAXBElement<GetSubjectById>(_GetSubjectById_QNAME, GetSubjectById.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetSubjectByIdResponse }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link GetSubjectByIdResponse }{@code >}
     */
    @XmlElementDecl(namespace = "http://web.subject_service.subject.groupeisi.com/", name = "getSubjectByIdResponse")
    public JAXBElement<GetSubjectByIdResponse> createGetSubjectByIdResponse(GetSubjectByIdResponse value) {
        return new JAXBElement<GetSubjectByIdResponse>(_GetSubjectByIdResponse_QNAME, GetSubjectByIdResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateSubject }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link UpdateSubject }{@code >}
     */
    @XmlElementDecl(namespace = "http://web.subject_service.subject.groupeisi.com/", name = "updateSubject")
    public JAXBElement<UpdateSubject> createUpdateSubject(UpdateSubject value) {
        return new JAXBElement<UpdateSubject>(_UpdateSubject_QNAME, UpdateSubject.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateSubjectResponse }{@code >}
     * 
     * @param value
     *     Java instance representing xml element's value.
     * @return
     *     the new instance of {@link JAXBElement }{@code <}{@link UpdateSubjectResponse }{@code >}
     */
    @XmlElementDecl(namespace = "http://web.subject_service.subject.groupeisi.com/", name = "updateSubjectResponse")
    public JAXBElement<UpdateSubjectResponse> createUpdateSubjectResponse(UpdateSubjectResponse value) {
        return new JAXBElement<UpdateSubjectResponse>(_UpdateSubjectResponse_QNAME, UpdateSubjectResponse.class, null, value);
    }

}
